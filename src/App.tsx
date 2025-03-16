import React, { useState } from 'react';
import { Layout, Typography, Button } from 'antd';
import FormView from './components/FormView/FormView';
import DrawerMenu from './components/DrawerMenu/DrawerMenu';
import { formCategories } from './data/formCategories';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [activeForm, setActiveForm] = useState(formCategories[0].forms[0].key);
  const [formData, setFormData] = useState(formCategories[0].forms[0].data);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleFormChange = (data: any) => {
    setFormData(data);
    console.log('Données du formulaire mises à jour :', data);
  };

  const handleMenuClick = (key: string) => {
    const selectedForm = formCategories
      .flatMap((category) => category.forms)
      .find((form) => form.key === key);

    if (selectedForm) {
      setActiveForm(selectedForm.key);
      setFormData(selectedForm.data);
    }
    setDrawerVisible(false); // Fermer le Drawer après la sélection
  };

  const currentForm = formCategories
    .flatMap((category) => category.forms)
    .find((form) => form.key === activeForm);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button
          type="primary"
          onClick={() => setDrawerVisible(true)}
          style={{ marginRight: 16 }}
        >
          Ouvrir le Menu
        </Button>
        <Title style={{ color: 'white', margin: 0 }}>JSONForms avec Ant Design</Title>
      </Header>
      <Content style={{ padding: '24px' }}>
        {currentForm && (
          <FormView
            schema={currentForm.schema}
            uischema={currentForm.uischema}
            data={formData}
            onChange={handleFormChange}
          />
        )}
      </Content>
      <DrawerMenu
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        onMenuClick={handleMenuClick}
      />
    </Layout>
  );
};

export default App;