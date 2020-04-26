import React from 'react';

import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import QuestionsForm from './QuestionsForm';

export default class BoardMaker extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            activeStep: 0,
        };
    }

    _handleTabChange = (event, newValue) => {
        this.setState({
            activeTab: newValue,
        });
    }

    _getSteps() {
        return [
            'Create Boards',
            'Pick Daily Doubles',
            'Save and Complete',
        ];
    }

    _setActiveStep(step) {
        this.setState({
            activeStep: step,
        });
    }

    _handleStep = (step) => {
        this._setActiveStep(step);
    }

    _renderStep(activeStep, activeTab) {
        switch (activeStep) {
            case 0:
                return (
                    <QuestionsForm
                        onTabChange={this._handleTabChange}
                        activeTab={activeTab}
                    />
                );
            case 1:
                return (
                    <span>Coming Soon!</span>
                );
            case 2:
                return (
                    <span>Coming Soon!</span>
                );
            default:
                return (
                    <span>Error, invalid step</span>
                );
        }
    }

    render() {
        const { activeTab, activeStep, } = this.state;

        console.log(activeStep);

        return (
            <React.Fragment>
                <Typography variant="h1" component="h1">
                    New Game
                </Typography>
                <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                    {this._getSteps().map((label, index) => (
                        <Step key={label}>
                            <StepButton onClick={() => this._handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                {this._renderStep(activeStep, activeTab)}
            </React.Fragment>
        );
    }
}
