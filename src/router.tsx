import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Tabmain from './component/Tab/main';
import Switchmain from './component/Switch/main';
// const Find = lazy(() => import('../page/Find'));
const RouteConfigs = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>Switch
                    <Route path="/" element={<Tabmain />}></Route>
                    <Route path="/switch" element={<Switchmain />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
export default RouteConfigs;
