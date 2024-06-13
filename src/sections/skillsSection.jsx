import React from 'react';
import './skillsSection.scss';

import BoxSkills from '../components/boxSkills';
import ProgressBar from '../components/progressBar';
import Button from '../components/button';

export default function SkillsSection() {
    return (
        <section id='skills' className="section skills">
            <h1>Compétences</h1>

            <div className="containerSkills">
                <BoxSkills title="Langages">
                    <img src="./public/images/iconSkills/iconJS.png" alt="" srcset="" title='JavaScript' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconTS.png" alt="" srcset="" title='TypeScript' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconMySQL.png" alt="" srcset="" title='MySQL' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconPHP.png" alt="" srcset="" title='PHP' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconPython.png" alt="" srcset="" title='Python' className='iconSkills' />
                </BoxSkills>
                <BoxSkills title="Technologies">
                    <img src="./public/images/iconSkills/iconWordpress.png" alt="" srcset="" title='WordPess' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconReact.png" alt="" srcset="" title='React' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconNode.png" alt="" srcset="" title='NodeJS' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconTailwind.png" alt="" srcset="" title='Tailwind' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconSASS.png" alt="" srcset="" title='SASS' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconBootstrap.png" alt="" srcset="" title='Bootstrap' className='iconSkills' />
                </BoxSkills>
                <BoxSkills title="Outils">
                    <img src="./public/images/iconSkills/iconFigma.png" alt="" srcset="" title='Figma' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconVSCode.png" alt="" srcset="" title='Visual Studio Code' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconGit.png" alt="" srcset="" title='Git' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconGitHub.png" alt="" srcset="" title='GitHub' className='iconSkills' />
                </BoxSkills>
                <BoxSkills title="Conception" class='concept'>
                    <img src="./public/images/iconSkills/iconWindows.png" alt="" srcset="" title='Windows' className='iconSkills' />
                    <img src="./public/images/iconSkills/iconLinux.png" alt="" srcset="" title='Linux' className='iconSkills' />
                </BoxSkills>
            </div>
            <a href="./images/CV.pdf" target="_blank" rel="noopener noreferrer"><Button title="Voir mon CV" /></a>
        </section >
    );
}
