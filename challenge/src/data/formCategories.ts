import schema1 from './schema1.json';
import uischema1 from './uischema1.json';
import data1 from './data1.json';
import schema2 from './schema2.json';
import uischema2 from './uischema2.json';
import data2 from './data2.json';
import schema3 from './schema3.json';
import uischema3 from './uischema3.json';
import data3 from './data3.json';

export interface FormCategory {
  title: string;
  forms: {
    key: string;
    label: string;
    schema: any;
    uischema: any;
    data: any;
  }[];
}

export const formCategories: FormCategory[] = [
  {
    title: "Informations Personnelles",
    forms: [
      {
        key: "form1",
        label: "Formulaire 1",
        schema: schema1,
        uischema: uischema1,
        data: data1,
      },
      {
        key: "form2",
        label: "Formulaire 2",
        schema: schema2,
        uischema: uischema2,
        data: data2,
      },
    ],
  },
  {
    title: "Informations Professionnelles",
    forms: [
      {
        key: "form3",
        label: "Formulaire 3",
        schema: schema3,
        uischema: uischema3,
        data: data3,
      },
    ],
  },
];