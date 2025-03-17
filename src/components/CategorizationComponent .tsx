import React from 'react';
import { Tabs } from 'antd';
import { RendererProps } from '@jsonforms/core';

const { TabPane } = Tabs;

interface CategorizationComponentProps extends RendererProps {
  uischema: any;
}

const CategorizationComponent: React.FC<CategorizationComponentProps> = (props) => {
  const { uischema, schema, path, renderers = [], cells } = props;

  return (
    <Tabs defaultActiveKey="0">
      {uischema.elements.map((category: any, index: number) => (
        <TabPane tab={category.label} key={index.toString()}>
          {category.elements.map((element: any, elementIndex: number) => {
            const rendererEntry = renderers.find((r) =>
              r.tester(element, schema, { rootSchema: schema, config:{} }) > 0
            );

            return rendererEntry?.renderer({
              uischema: element,
              schema,
              path,
              enabled: true,
              visible: true,
              renderers,
              cells,
            });
          })}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CategorizationComponent;
