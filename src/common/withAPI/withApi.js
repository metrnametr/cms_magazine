import React, { Component } from 'react';
import axios from 'axios';

const urlApi = 'https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=';

const withApi = WrappedComponent => {
    return class extends Component {

        state = {
            loading: true,
            url: urlApi,
            sortBy: {},
            currentPage: 1
        }

        async componentDidMount() {
            await this.fetchData();
        }

        async componentDidUpdate(prevProps, prevState) {
            const { sortBy } = this.state;
            if (sortBy !== prevState.sortBy) {
                await this.fetchData();
            }
        }

        fetchData = async () => {
            const { url, currentPage, sortBy } = this.state;
            this.setState({
                loading: true
            });
            const urlApi = `${url}${currentPage}&${ Object.keys(sortBy).map(key => (sortBy[key].sortAsc !== null) ? `sort=${key}&sort_direction=${sortBy[key].sortAsc ? 'asc' : 'desc' }`: '').join('') }`;
            const items = await axios.get(urlApi);
            const data = await items.data;
            if (data) {
                this.setState({
                    loading: false,
                    data
                })
            }
        }

        toggleSortType = (type) => {
            if (this.state.sortBy[type]) {
                if (!(this.state.sortBy[type].sortAsc === null)) {
                    this.setState({
                        sortBy: {
                            [type]: {
                                sortAsc: this.state.sortBy[type].sortAsc ? !this.state.sortBy[type].sortAsc : null
                            }
                        }
                    }) 
                } else {
                    this.setState({
                        sortBy: {
                              [type]: {
                                sortAsc: true
                              }
                        }
                    }) 
                }
            } else {
                this.setState({
                    sortBy: {
                          [type]: {
                            sortAsc: true
                          }
                    }
                }) 
            }
        }

        toggleSort = (type) => {
            switch(type){
                case 'SORT_WORKS': {
                    this.toggleSortType('works_count');
                    break;
                };
                case 'SORT_PARTNERS': {
                    this.toggleSortType('partners_count');
                    break;
                };
                case 'SORT_RATE': {
                    this.toggleSortType('rate');
                };
                default: {
                    
                }
            }
        }

        togglePage = (currentPage) => {
            this.setState({
                currentPage
            }, this.fetchData)
        }

        render(){
            const { loading, data, sortBy } = this.state;
            return <WrappedComponent togglePage={this.togglePage} sortBy={sortBy} toggleSort={this.toggleSort} loading={loading} items={data} {...this.props} />
        }
    }
}

export default withApi;