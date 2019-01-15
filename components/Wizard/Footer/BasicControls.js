import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class WizardFooterBasicControls extends Component {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    labels: PropTypes.shape({
      cancel: PropTypes.string,
      prev: PropTypes.string,
      save: PropTypes.string,
      next: PropTypes.string,
      finish: PropTypes.string
    }),
    onCancel: PropTypes.func,
    onChangeStep: PropTypes.func.isRequired,
    onFinish: PropTypes.func,
    onSave: PropTypes.func,
    showSaveButton: PropTypes.bool,
    totalSteps: PropTypes.number.isRequired
  }

  static defaultProps = {
    labels: {
      cancel: 'Cancel',
      prev: 'Previous',
      save: 'Save',
      next: 'Next',
      finish: 'Finish'
    }
  }

  render() {
    const {
      currentStep,
      labels,
      onCancel,
      onFinish,
      onSave,
      showSaveButton,
      totalSteps
    } = this.props
    const isLastStep = currentStep === totalSteps - 1
    return (
      <React.Fragment>
        <Button onClick={onCancel}>{labels.cancel}</Button>
        {currentStep > 0 && (
          <Button onClick={this.handlePrevious}>{labels.prev}</Button>
        )}
        {showSaveButton &&
          !isLastStep && <Button onClick={onSave}>{labels.save}</Button>}
        {!isLastStep && (
          <Button className="blue" onClick={this.handleNext}>
            {labels.next}
          </Button>
        )}
        {isLastStep && (
          <Button className="blue" onClick={onFinish}>
            {labels.finish}
          </Button>
        )}
      </React.Fragment>
    )
  }

  handleNext = () => {
    const { currentStep, onChangeStep } = this.props
    onChangeStep(currentStep + 1)
  }

  handlePrevious = () => {
    const { currentStep, onChangeStep } = this.props
    onChangeStep(currentStep - 1)
  }
}

export default WizardFooterBasicControls