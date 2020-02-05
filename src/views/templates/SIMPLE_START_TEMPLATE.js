import React from "react";
import { templateRender, createContainer } from "../../@ptt-core";
import { SimpleTable } from "./tables/simple";

const SAMPLE_ROOT = props => {
  const { children } = props;

  return (
    <div>
      <h4>dae jaburu</h4>
      {children}
    </div>
  );
};

const BUTTONS = {
  obj_id: "SIMPLE_BUTTONS",
  view: () => (
    <div>
      <button>Hohoho</button>
    </div>
  )
};

const TABLE_001 = {
  obj_id: "TABLE_001",
  view: props => createContainer(SimpleTable, props),
  container: [{ item: BUTTONS }]
};

const ROOT = {
  obj_id: "SIMPLE_START_ROOT",
  view: SAMPLE_ROOT,
  container: [{ item: TABLE_001, xs: "12" }]
};

const SIMPLE_START_TEMPLATE = () => {
  return templateRender(ROOT);
};

export default SIMPLE_START_TEMPLATE;
