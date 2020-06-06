import React, { useState, useEffect, memo } from "react";
import { Card, Input } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsLoaded, isLoadedSelector } from '../../slices/dashboard';

const { TextArea } = Input;
const Create = () => {
  return (
    <>
      <Card title="New Citation">
        <label>Citation</label>
        <TextArea />
      </Card>
    </>
  );
};

export default memo(Create);
