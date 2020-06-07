import React, { useEffect, memo } from "react";
import { Card, Input, Form, Select, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { citationSelector, fetchCitation } from "../../slices/citation";
import { layout, tailLayout } from "../../configuration/index";

const { TextArea } = Input;
const { Option } = Select;

const Create = () => {
  const dispatch = useDispatch();
  const citation = useSelector(citationSelector);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchCitation());
    }

    if (citation == null) fetchData();
  }, [dispatch, citation]);

  const onFinish = values => {
    console.log(values);
  };

  const onFinishFailed = values => {
    console.log(values);
  };
  return (
    <>
      <Card title="New Citation">
        {citation != null && (
          <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "A category is required"
                }
              ]}
            >
              <Select placeholder="Select a Category">
                <Option value="test-1">Test 1</Option>
                <Option value="test-2">Test 2</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Citation"
              name="citation"
              rules={[
                {
                  required: true,
                  message: "A citation is required"
                }
              ]}
            >
              <TextArea
                defaultValue={citation.body}
                rows={5}
                placeholder="Paste your citation here"
              />
            </Form.Item>
            <Form.Item label="URL" name="url">
              <Input
                defaultValue={citation.url}
                placeholder="Paste the URL to your citation here"
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="submit">Save</Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </>
  );
};

export default memo(Create);
