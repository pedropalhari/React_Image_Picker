/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import { useRef, useState } from "react";
import styled from "@emotion/styled";
import {motion} from 'framer-motion';
import Icon from './Icon';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #141d26;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 200px;

  display: flex;
  justify-content: center;

  background-color: #243447;

  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default function App() {
  let [imageSrc] = useState('');
  let inputRef = useRef<HTMLInputElement>(null);

  return (
    <Root>
      <ImageDiv onClick={() => inputRef.current?.click()}>
        {imageSrc === '' ? 
        
        <div css={css`
      box-sizing: border-box; padding: 50px;
      `}><Icon /></div> : <Image
          src={"https://zh.rbsdirect.com.br/imagesrc/21303722.jpg?w=700"}
        />} 
      
      </ImageDiv>
      

    

      <input ref={inputRef} type="file" accept="image/png, image/jpeg" css={css`display: none`}/>
    </Root>
  );
}


