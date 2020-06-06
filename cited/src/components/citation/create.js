import React, { useEffect, memo } from "react";
import { Card, Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { citationSelector, fetchCitation } from "../../slices/citation";
import { layout } from "../../configuration/index";

const { TextArea } = Input;

const Create = () => {
  const citation = useSelector(citationSelector);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchCitation();
      console.log("result", result);
    }
    fetchData();
  }, []);

  const onFinish = values => {
    console.log(values);
  };

  const onFinishFail = values => {
    console.log(values);
  };
  return (
    <>
      <Card title="New Citation">
        {citation != null && (
          <Form {...layout}>
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
              <TextArea defaultValue={citation.body} />
            </Form.Item>
          </Form>
        )}
      </Card>
    </>
  );
};

export default memo(Create);
