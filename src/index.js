import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import { GifExpertApp } from '../src/components/GifExpertApp';


const DivRoot = document.querySelector('#root');
const root = createRoot(DivRoot);
root.render(<GifExpertApp />);

