import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Tabmain from './component/Tab/main';
import Switchmain from './component/Switch/main';
import Timemain from './component/Timeline/main';
import KeepAlive,{AliveScope} from 'react-activation'
// const Find = lazy(() => import('../page/Find'));
const RouteConfigs = () => {
    return (
        <AliveScope>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>Switch
                    <Route path="/" element={<KeepAlive id='3'><Tabmain /></KeepAlive>}></Route>
                    <Route path="/switch" element={<KeepAlive id='2'><Switchmain /></KeepAlive>}></Route>
                    <Route path="/timeline" element={<KeepAlive id='1'><Timemain /></KeepAlive>}></Route>
                </Routes>
            </Suspense>
        </AliveScope>
    );
};
export default RouteConfigs;
