$src = "C:\Users\CreativeIT\Desktop\roiserTeam"
$dst = "C:\Users\CreativeIT\Desktop\roiserTeam_clean_project.zip"
$exclude = @("node_modules", ".git", "dist")

if (Test-Path $dst) { Remove-Item $dst -Force }

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::Open($dst, 'Create')

Get-ChildItem -Path $src -Recurse -File | Where-Object {
    $rel = $_.FullName.Substring($src.Length + 1)
    -not ($rel -split '\\' | Where-Object { $exclude -contains $_ })
} | ForEach-Object {
    $entry = $_.FullName.Substring($src.Length + 1)
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $entry)
}

$zip.Dispose()
Write-Host "ZIP_CREATED_SUCCESSFULLY"
