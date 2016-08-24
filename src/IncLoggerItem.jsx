import React from 'react';


export class IncLoggerItem extends React.Component {


    render() {
        return <tr>
            <td><span onClick={ ()=>{ this.props.onDelete(this.props.item); } }>&times;</span></td>
            <td>
                <a href={this.props.item['url']} target="_blank">{this.props.item['url']}</a>
            </td>
            <td>{ (new Date(this.props.item['ts'])).toLocaleDateString() + ' ' + (new Date(this.props.item['ts'])).toLocaleTimeString() }</td>
            <td>
                <a href={this.props.item['shorten_url']} target="_blank">{this.props.item['shorten_url']}</a>
            </td>
        </tr>
    }


}