import React from 'react';
import { Drawer, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { formCategories } from '../../data/formCategories';

interface DrawerMenuProps {
  visible: boolean;
  onClose: () => void;
  onMenuClick: (key: string) => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ visible, onClose, onMenuClick }) => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    onMenuClick(e.key);
  };

  return (
    <Drawer
      title="Navigation"
      placement="left"
      onClose={onClose}
      visible={visible}
      width={250}
    >
      <Menu mode="inline" onClick={handleMenuClick}>
        {formCategories.map((category) => (
          <Menu.SubMenu key={category.title} title={category.title}>
            {category.forms.map((form) => (
              <Menu.Item key={form.key}>{form.label}</Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Drawer>
  );
};

export default DrawerMenu;