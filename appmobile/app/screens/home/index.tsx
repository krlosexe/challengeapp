import React from 'react';
import Layout from '@app/components/layouts/content';
import Search from '@app/components/search';
import ResultsUsers from '@app/components/resultsUsers';
import Charts from '@app/components/charts';

function Index() {
    return  <>
        <Layout>
            <Search />
            <ResultsUsers />
        </Layout>   
        <Charts />
    </>
}

export default Index;