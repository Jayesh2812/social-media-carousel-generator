import React from 'react';
import { Card, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { EditOutlined, SettingOutlined, FormatPainterOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';
const onChange = (key: string) => {
  console.log(key);
};
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Content',
    children: 'Content',
    icon: <EditOutlined />
  },
  {
    key: '2',
    label: 'Settings',
    children: 'Settings',
    icon: <SettingOutlined />
  },
  {
    key: '3',
    label: 'Theme',
    children: 'Theme',
    icon: <FormatPainterOutlined />
  },
  {
    key: '4',
    label: 'Preview',
    children: 'Preview',
    icon: <EyeOutlined />
  },
  {
    key: '5',
    label: 'Download',
    children: 'Download',
    icon: <DownloadOutlined />
  },
];

const Editor: React.FC = () => <Card><Tabs defaultActiveKey="1" items={items} onChange={onChange} /></Card>

export default Editor;