import React from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonSchema, RankedTester, rankWith, UISchemaElement } from '@jsonforms/core';
import CustomInput from './../CustomRenderers/CustomRenderers';

interface FormViewProps {
  schema: JsonSchema;
  uischema: UISchemaElement;
  data: any;
  onChange: (data: any) => void;
}

const customInputTester: RankedTester = rankWith(
    1,
    (uischema: UISchemaElement, schema: JsonSchema) => {
      return schema?.type === 'string' ? true : false;
    }
  );

// Ajouter le composant personnalisé aux renderers
const renderers = [
    ...materialRenderers,
    {
      tester: customInputTester,
      renderer: CustomInput,
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