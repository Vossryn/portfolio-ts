import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import PeopleIcon from '@material-ui/icons/People';

import NeonContainer from '../../componets/NeonContainer.component';

import "./styles.scss";

const Skills: React.FC = () => {

    const skills = [
        { primary: "Javascript", secondary: "", icon: CodeIcon },
        { primary: "HTML", secondary: "", icon: CodeIcon },
        { primary: "CSS", secondary: "", icon: CodeIcon },
        { primary: "C#", secondary: "", icon: CodeIcon },
        { primary: "PHP", secondary: "", icon: CodeIcon },
        { primary: "NodeJS", secondary: "", icon: CodeIcon },
        { primary: "React", secondary: "", icon: CodeIcon },
        { primary: "VueJS", secondary: "", icon: CodeIcon },
        { primary: "AngularJS", secondary: "", icon: CodeIcon },
        { primary: "Sql Server", secondary: "", icon: StorageIcon },
        { primary: "MySql", secondary: "", icon: StorageIcon },
        { primary: "Postgres", secondary: "", icon: StorageIcon },
        { primary: "Git", secondary: "", icon: GitHubIcon },
        { primary: "Windows IIS", secondary: "", icon: ComputerIcon },
        { primary: "Linux/Unix Server", secondary: "", icon: ComputerIcon },
        { primary: "Agile Methodology Trained", secondary: "", icon: PeopleIcon },
        { primary: "Microsoft Word", secondary: "", icon: InsertDriveFileOutlinedIcon },
        { primary: "Excel", secondary: "", icon: InsertDriveFileOutlinedIcon },
        { primary: "PowerPoint", secondary: "", icon: InsertDriveFileOutlinedIcon }
    ]

    return (
        <NeonContainer title="Skills">
            <List className="Skills-List">
                {skills.map((skill, index) => {
                    return (
                        <ListItem key={index} className="Skills-List-Item">
                            <ListItemAvatar>
                                <Avatar>
                                    <skill.icon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={skill.primary} secondary={skill.secondary} />
                        </ListItem>
                    )
                })}
            </List>
        </NeonContainer>
    )
}

export default Skills;
