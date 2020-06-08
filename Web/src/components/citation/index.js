import React, { useEffect, useState, memo } from "react";
import { Card, Row, Col, Tree } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  citationsSelector,
  categoriesSelector,
  fetchCategories,
  fetchCitations
} from "../../slices/citation";

const Index = () => {
  const dispatch = useDispatch();
  const citations = useSelector(citationsSelector);
  const categories = useSelector(categoriesSelector);
  const [gData, setGData] = useState(categories);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchCitations());
    }

    if (citations == null) fetchData();
  }, [dispatch, citations]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchCategories());
    }

    if (categories == null) fetchData();
  }, [categories, dispatch]);

  const onDragEnter = info => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  const onDragEnd = async dragResult => {
    if (!dragResult.combine && !dragResult.destination) return;
  };

  const onDrop = info => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    setGData(data);
  };

  const mapTreeNodes = () => {
    return (categories || []).map(x => {
      return {
        key: x.id,
        title: x.name,
        children: x.citations
      };
    });
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Tree
              className="draggable-tree"
              draggable
              blockNode
              onDragEnter={onDragEnter}
              onDrop={onDrop}
              treeData={mapTreeNodes()}
            />
          </Card>
        </Col>
        <Col span={18}>
          <Card>This is where the data goes</Card>
        </Col>
      </Row>
    </>
  );
};

export default memo(Index);
