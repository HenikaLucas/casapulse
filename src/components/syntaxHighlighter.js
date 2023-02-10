import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import "prism-themes/themes/prism-one-light.css";

var nw = new Normalizer({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 80,
});

export default function SyntaxHighlighter({ code, language }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    const indentedCode = nw.normalize(code, { indent: 4 })
    return (
        <div>
            <pre className="rounded"><code className={`language-${language}`}>
                {indentedCode}
            </code></pre>
        </div>
    );
}

SyntaxHighlighter.propTypes = {
    code: PropTypes.string.isRequired,
    language: PropTypes.string,
};