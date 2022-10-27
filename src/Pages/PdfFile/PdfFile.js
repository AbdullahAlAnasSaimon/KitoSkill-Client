import React from 'react';
import { Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});


const PdfFile = ({courses}) => {
  const {author, details, duration, name, photo, price, seats, startingDate, content} = courses;
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>{name}</Text>
        <Image style={styles.image} src={photo}></Image>
        <Text style={styles.text}>Instructor: {author}</Text>
        <Text style={styles.text}>Price : ${price}</Text>
        <Text style={styles.text}>Course Duration: {duration}</Text>
        <Text style={styles.text}>Total Seats: {seats}</Text>
        <Text style={styles.text}>Start from: {startingDate}</Text>
        {content.map(c => <Text style={styles.text}>{c}</Text>)}
        <Text style={styles.text}>Description: {details}</Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PdfFile;