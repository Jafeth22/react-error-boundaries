import React from 'react';
import style from './style.module.css';
import { withError } from '../error';

class Widget extends React.Component {
    render() {
        // Si entra falla, porque está llamando a una func que no existe
        if (this.props.fail) {
            this.a();
        }

        return (
            <div className={style.widget}>
                <h1>Widget</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        );
    }
}
// Se está aplicando HOC (High Order Component)
export default withError(Widget);
