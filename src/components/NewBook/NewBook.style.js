import styled from "styled-components";

export const WrapperNewBook=styled.div.attrs({className:"divNew"})`


  #frmnewbook,#frmupdbook{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    margin: auto;
    padding: 5px;
  }


  label{
    font-size: 1.3em;
  }
  input[type="text"]{
    width: 80%;
    height: 35px;
    float: right;
    margin-bottom: 15px;
  }

  .divnewb,.divupdb{
    width: 100%;
    margin: 5px auto 5px 0px;

  }

  #frmnewbook #btn_nb_submit,#btn_nb_cancel{
    width: 200px;
    font-size: 1.5em;
    margin-bottom: 15px;
    height: 60px;
    border: none;
    border-radius: 5px;
    background: rgb(68, 167, 129);
    color: white;
  }



`