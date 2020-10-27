import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import Modal from './Modal';

// Hooks cannot be used in class components
class Details extends React.Component {
  state = { loading: true, showModal: false };

  toggleModel = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  // similar to useEffect
  // run when first start upp
  // Useful to make Ajax request
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        url: animal.url,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
      // eslint-disable-next-line
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading... </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button
            style={{ backgroundColor: this.props.theme }}
            onClick={this.toggleModel}
          >
            Adopt {name}!
          </button>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModel}>No, I am a mosnter</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme });

const WrappedDetails = connect(mapStateToProps)(Details);

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <WrappedDetails {...props} />
    </ErrorBoundary>
  );
}
