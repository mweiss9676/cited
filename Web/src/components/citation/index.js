import React, { useEffect, memo } from "react";
import { Card, Row, Col } from "antd";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";

import { citationsSelector, fetchCitations } from "../../slices/citation";

const Index = () => {
  const dispatch = useDispatch();
  const citations = useSelector(citationsSelector);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchCitations());
    }

    if (citations == null) fetchData();
  }, [dispatch, citations]);

  const onDragEnd = async dragResult => {
    if (!dragResult.combine && !dragResult.destination) return;
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable" isCombineEnabled>
                {(droppableProvider, droppableSnapshot) => (
                  <div ref={droppableProvider.innerRef}>
                    {(citations || []).map(item => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id.toString()}
                        index={item.id}
                      >
                        {(draggableProvider, draggableSnapshot) => (
                          <div
                            ref={draggableProvider.innerRef}
                            {...draggableProvider.draggableProps}
                            {...draggableProvider.dragHandleProps}
                          >
                            <div className="citation-tree-item">
                              {item.title}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
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
