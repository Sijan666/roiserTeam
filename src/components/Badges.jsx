import React from "react";
import Badge from "./common/Badge";

const Badges = ({ badgesText, badgeText, className = "" }) => {
  return <Badge className={className}>{badgesText || badgeText}</Badge>;
};

export default Badges;
