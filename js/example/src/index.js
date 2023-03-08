/* globals */
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import URDFLoader from '../../src/URDFLoader';
import { LoadingManager } from 'three';

var robot;

// angle 是弧度
function get_matrix(angles) {
    console.log()
    var joints=new Array(angles.length);
    var idx=0;

    for (let i in robot.joints) {
        let joint = robot.joints[i];
        joints[idx]=joint;
        idx=idx+1;
    }

    for (let i in angles) {
        let joint = joints[i];
        joint.setJointValue(angles[i]);
    }
    robot.updateMatrixWorld(true);

    var matrix={};

    for (let i in robot.joints) {
        let joint = robot.joints[i];
        matrix[joint.name]=joint.matrixWorld;
        console.log(joint);
    }

    return matrix;
}


// function init() {
    // Load robot
    const manager = new LoadingManager();
    const loader = new URDFLoader(manager);
    loader.load("./gp180/urdf/gp180.urdf", result => {

        robot = result;

    });

    manager.onLoad = () => {
        // console.log("load success");
        var angles=[1,1,1,1,1,1];
        console.log(robot);
        let matrix=get_matrix(angles);
        console.log(matrix);
    };
// }

