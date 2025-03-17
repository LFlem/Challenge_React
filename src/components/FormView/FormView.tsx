import React from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';
// import CustomInput from './../CustomRenderers/CustomRenderers';
import CategorizationComponent from '../CategorizationComponent ';

interface FormViewProps {
  schema: JsonSchema;
  uischema: UISchemaElement;
  data: any;
  onChange: (data: any) => void;
}

// const customInputTester: RankedTester = rankWith(
//     1,
//     (uischema: UISchemaElement, schema: JsonSchema) => {
//       return schema?.type === 'string' ? true : false;
//     }
//   );

// const renderers = [
//     ...materialRenderers,
//     {
//       tester: customInputTester,
//       renderer: CustomInput,
//     },
//   ];

const renderers = [
  ...materialRenderers,
  {
    tester: (uischema: UISchemaElement, schema: JsonSchema) => {
      return uischema.type === 'Categorization' ? 10 : -1;
    },
    renderer: CategorizationComponent,
  },
];

const FormView: React.FC<FormViewProps> = ({ schema, uischema, data, onChange }) => {
  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={renderers}
      cells={materialCells}
      onChange={({ data }) => onChange(data)}
    />
  );
};

export default FormView;