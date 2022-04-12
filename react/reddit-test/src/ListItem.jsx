"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const ListItem = ({ children }) => {
    return (<div>
      <styles_1.ListItemStyle>{children}</styles_1.ListItemStyle>
    </div>);
};
exports.default = ListItem;
