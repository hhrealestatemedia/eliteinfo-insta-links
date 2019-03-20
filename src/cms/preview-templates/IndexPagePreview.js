/* eslint-disable */
import React from 'react'
import PropTypes, { array } from 'prop-types'
import { IndexPageTemplate } from '../../pages/index'

const AboutPagePreview = ({ entry }) => {
    let data = { links: [] }
    entry.getIn(['data', 'links']).map( (item) => {
        let newLink = {}
        item._root.entries.map( (entry) => {
            newLink[entry[0]] = entry[1]
        })
        data.links.push(newLink)
    })
    data.image = entry.getIn(['data', 'image'])
    return (
        <IndexPageTemplate
          items={data}
        />
    )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
