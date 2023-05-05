import React, { useEffect, useMemo, useState } from 'react'
import { Form } from 'react-bootstrap';

const QAstepOne = ({handlenext,selected, setSelected}) => {
    const [fetchData, setfetchData] = useState([]); 
    
    useMemo(() => {
        fetch("http://localhost:6060/data")
          .then((res) => res.json())
          .then((data) => setfetchData(data));
      }, []);

      const handleChange = (e) => {
        setSelected({ ...selected, [e.target.name]: e.target.value });
      };

  return (
    <>
         <div className="">
              <div className="step-content">
                <div className="text-end mb-3 step">Step 1/3</div>
                <Form>
                  {fetchData?.map((item, index) => {
                    return (
                      <Form.Group className="mb-3" key={index}>
                        <Form.Label>{item.que}</Form.Label>

                        {item.datepick ? (
                          <Form.Control
                            type="date"
                            name="venturedate"
                            onChange={handleChange}
                            placeholoder="ventureDate"
                            className="shadow-none"
                          />
                        ) : (
                          <Form.Select
                            onChange={handleChange}
                            name={`item${index}`}
                          >
                            <option value="">select</option>
                            {item?.options?.map((option, id) => {
                              return (
                                <option value={option.text} key={id}>
                                  {option?.text}
                                </option>
                              );
                            })}
                          </Form.Select>
                        )}
                      </Form.Group>
                    );
                  })}
                </Form>
              </div>
              <div className="button mt-3">
                <button className="btn btn-save text-center" onClick={handlenext}>
                  Save and Next
                </button>
              </div>
            </div>
    </>
  )
}

export default QAstepOne