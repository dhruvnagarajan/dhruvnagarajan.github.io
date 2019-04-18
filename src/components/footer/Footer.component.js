import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'
import { Button } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class FooterComponent extends Component {
    
    print() {
        console.log('Print to pdf called.')
        const input = document.getElementById('pdfView')
        html2canvas(input)
        .then((canvas) => {
            const img = canvas.toDataURL('image/png')
            const pdf = new jsPDF()
            pdf.addImage(img, 'JPEG', 0, 0)
            pdf.save('dhruvaraj-resume.pdf')
        })
    }
    
    render() {
        return (
            <div className="outer h6 lol" id="ASD" onClick={ this.print }>
                <Grid fluid>
                    <Row center="xs">
                        <b>Contact xdeebot.social@gmail.com</b>
                    </Row>
                    <br/>
                    <Row center="xs">
                        &copy; 2019 dhruvaraj nagarajan
                    </Row>
                </Grid>
            </div>
        )
    }
}