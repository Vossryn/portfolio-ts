import React from 'react';
import Typography from '@material-ui/core/Typography';

import "./styles.scss";

const Logo: React.FC = () => {

    return (
        <div className="Logo-Wrapper">
            <Typography
                variant="h1"
                data-text="Philip B Flynt Jr"
            >
                Philip B Flynt Jr
            </Typography>
            <Typography
                variant="h2"
                data-text="Full Stack Developer"
            >
                Full Stack Developer
            </Typography>
        </div>
    )
}

export default Logo;
