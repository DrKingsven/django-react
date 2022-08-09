// import React, {useState} from "react";
// import {Button, Form, Modal} from "react-bootstrap";
//
// //
// // function Example() {
// //     const [show, setShow] = useState(false);
// //
// //     const handleClose = () => setShow(false);
// //     const handleShow = () => setShow(true);
// //
// //
// //     function SelectBasicExample() {
// //         return (<Form.Select aria-label="Default select example">
// //             <option>Приортитет:</option>
// //             <option value="1">Критический</option>
// //             <option value="2">Высокий</option>
// //             <option value="3">Средний</option>
// //             <option value="4">Плановый</option>
// //             <option value="5">Низкий</option>
// //         </Form.Select>);
// //     }
// //
// //
// //     return (<>
// //         <Button variant="primary" onClick={handleShow}>
// //             Создать задачу
// //         </Button>
// //
// //         <Modal show={show} onHide={handleClose}>
// //             <Modal.Header closeButton>
// //                 <Modal.Title>Создать задачу</Modal.Title>
// //             </Modal.Header>
// //             <Form>
// //
// //                 <SelectBasicExample/>
// //
// //                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
// //                     <Form.Label>Формулировка задачи</Form.Label>
// //                     <Form.Control as="textarea" rows={3}/>
// //                 </Form.Group>
// //
// //         </Modal>
// //     </>);
//
//
// const Example = () => {
//     const [inputValuerefUsers, setInputValue] = useState('')
//     const [inputValue, setInputValue] = useState('')
//     const [inputValue, setInputValue] = useState('')
//     const [inputValue, setInputValue] = useState('')
//
//
//     return(
//      <div>
//          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//          <p>{inputValue}</p>
//          <Button onClick={async () => {
//              console.log(inputValue);
//                  await fetch("http://127.0.0.1:8000/api/v1/tasks/", {
//                      method: "POST",
//                      headers: {
//                          "Content-Type": "application/json"
//                      },
//                      body: JSON.stringify({
//                          inputValue
//                      })
//                  });
//          }
//          }>Отправить</Button>
//      </div>
//     );
// };
// //     function Example() {
// //         const [lgShow, setLgShow] = useState(false);
// //         const [show, setShow] = useState(false);
// //         const handleClose = () => setShow(false);
// //         const handleShow = () => setShow(true);
// //
// //     function SelectBasicExample() {
// //         return (<Form.Select aria-label="Default select example">
// //             <option>Приортитет:</option>
// //             <option value="1">Критический</option>
// //             <option value="2">Высокий</option>
// //             <option value="3">Средний</option>
// //             <option value="4">Плановый</option>
// //             <option value="5">Низкий</option>
// //         </Form.Select>);
// //     }
// //         return (
// //             <>
// //
// //                 <Button onClick={() => setLgShow(true)}>Создать задачу</Button>
// //                 <Modal
// //                     size="lg"
// //                     show={lgShow}
// //                     onHide={() => setLgShow(false)}
// //                     aria-labelledby="example-modal-sizes-title-lg"
// //                 >
// //                     <Modal.Header closeButton>
// //                         <Modal.Title id="example-modal-sizes-title-lg">
// //                             Создать задачу
// //                         </Modal.Title>
// //                     </Modal.Header>
// //                     <Modal.Body>
// //                         <SelectBasicExample/>
// //                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
// //                             <Form.Label>Формулировка задачи</Form.Label>
// //                             <Form.Control as="textarea" rows={3}/>
// //
// //                         {/*</Form> <Modal.Footer>*/}
// //                         <Button variant="secondary">
// //                             Close
// //                         </Button>
// //                         <Button variant="primary" onClick={handleClose}>
// //                             Save Changes
// //                         </Button>
// //                     {/*</Modal.Footer>*/}
// //                         </Form.Group>
// //                     </Modal.Body>
// //                 </Modal>
// //             </>
// //         );
// //
// // }
// export default Example