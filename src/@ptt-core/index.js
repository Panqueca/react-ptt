import React from "react";

export function templateRender(layout) {
  const { obj_id = null, view: View = null, container: C = [] } = layout;

  return (
    <View obj_id={obj_id}>
      {C.map((gridItem, index) => {
        const { item = {} } = gridItem;

        return (
          <React.Fragment key={index}>{templateRender(item)}</React.Fragment>
        );
      })}
    </View>
  );
}

export function createContainer(Component, props) {
  return (
    <React.Fragment>
      <Component {...props} />
      {props.children}
    </React.Fragment>
  );
}
