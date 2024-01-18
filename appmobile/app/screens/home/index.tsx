import React from 'react';
import Layout from '@app/components/layouts/content';
import Search from '@app/components/search';
import ResultsUsers from '@app/components/resultsUsers';

function Index() {
    return  <Layout>
                <Search />
                <ResultsUsers />
            </Layout>   
}

export default Index;