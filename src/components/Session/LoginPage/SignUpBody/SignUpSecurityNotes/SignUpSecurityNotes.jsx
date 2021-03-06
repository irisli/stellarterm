import React from 'react';

export default () => (
    <div className="InfoBlockWithHoverDescription-popup InfoBlockWithHoverDescription-popup-left">
        <p>
            The key is generated using entropy from {' '}
            <a
                href="https://github.com/dchest/tweetnacl-js#random-bytes-generation"
                target="_blank"
                rel="noopener noreferrer">
                TweetNaCl{"'"}s randomByte function
            </a>{' '}
            which, in most browsers, uses getRandomValues from the {' '}
            <a href="https://w3c.github.io/webcrypto/" target="_blank" rel="noopener noreferrer">
                Web Cryptography API
            </a>
            .
        </p>
        <p>
            However, using a secure random number generation does not protect you from a
            compromised computer. Take great care to make sure your computer is secure and do not
            run this on a computer you do not trust.
        </p>
    </div>
);
