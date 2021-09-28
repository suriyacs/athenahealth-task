import React from 'react';
import Select from 'react-select';

class CustomSelect extends React.Component {
   state = {
    options: this.props.options,
    value: this.props.value,
    ownUpdate: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let options = prevState.options;
    let value = prevState.value;
    if (prevState.ownUpdate) {
        return {
            options,
            value,
            ownUpdate: false
        };
    }
    if (nextProps.options.length) {
        options = nextProps.options;
    }
    if (nextProps.value) {
        value = nextProps.value;
    }
    return {
        options,
        value
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ value: selectedOption.value, ownUpdate: true }, () => {
      if (this.props && this.props.onChange) {
        this.props.onChange(selectedOption);
      }
    });
  }

  render() {
    const customStyles = {
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        const bgColor = '#124766';
        const grayColor = '#7b7b7b';
        const whiteColor = '#FFFF';
        return {
          ...styles,
          backgroundColor: isDisabled
            ? null
            : isSelected
            ? bgColor
            : isFocused
            ? grayColor
            : null,
          color: isDisabled
            ? null
            : isSelected
            ? whiteColor
            : isFocused
            ? whiteColor
            : null,
        };
      },
    };

    let isSearchable = true;
    if (this.props.isSearchable === false) {
      isSearchable = false;
    }
    return (
      <React.Fragment>
        <span id="customSelect">
          <Select
            options={this.state.options}
            isMulti={this.props.isMulti}
            placeholder={this.props.placeholder}
            isSearchable={isSearchable}
            styles={customStyles}
            isClearable={this.props.isClearable}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: '#124766',
              },
            })}
            onChange={this.handleChange}
            onMenuOpen={this.props.onOpen}
            value={this.props.options.filter(
              ({ value }) => value === this.state.value
            )}
          />
        </span>
      </React.Fragment>
    );
  }
}

export default CustomSelect;
