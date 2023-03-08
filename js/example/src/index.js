/* globals */
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import URDFLoader from '../../src/URDFLoader';
import { LoadingManager } from 'three';



// Load robot
const manager = new LoadingManager();
const loader = new URDFLoader(manager);
loader.load("./gp180/urdf/gp180.urdf");

manager.onLoad= () => {
    console("load success");
}


console.log("lalalla");
