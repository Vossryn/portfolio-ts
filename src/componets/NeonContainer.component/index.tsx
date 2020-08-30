import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import "./styles.scss";

interface Props {
    title: string;
}

const NeonContainer: React.FC<Props> = ({title, children}) => {

    return (
        <Paper className="Neon-Container" elevation={0}>
            <Typography
                variant="h1"
                data-text={title}
                className="Neon-Container-Title"
            >
                {title}
            </Typography>
            {children}
        </Paper>
    )
}

export default NeonContainer;
