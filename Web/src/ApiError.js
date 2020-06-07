import "antd/dist/antd.css";
import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { errorSelector } from "./slices/api";
import { notification } from "antd";

// component tested to not rerender children on error
const ApiError = ({ children }) => {
  const error = useSelector(errorSelector);

  useEffect(() => {
    function notifyError() {
      notification.error({
        message: error.title,
        description: error.error
      });
    }
    if (!!error) notifyError();
  }, [error]);

  return children;
};

export default memo(ApiError);
