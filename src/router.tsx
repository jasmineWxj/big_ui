import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Tabmain from './component/Tab/main';
import Switchmain from './component/Switch/main';
import Timemain from './component/Timeline/main';
// const Find = lazy(() => import('../page/Find'));
const RouteConfigs = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>Switch
                    <Route path="/" element={<Tabmain />}></Route>
                    <Route path="/switch" element={<Switchmain />}></Route>
                    <Route path="/timeline" element={<Timemain />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
export default RouteConfigs;
