import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Tabmain from './component/Tab/main';
// const Find = lazy(() => import('../page/Find'));
const RouteConfigs = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Tabmain />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
export default RouteConfigs;
