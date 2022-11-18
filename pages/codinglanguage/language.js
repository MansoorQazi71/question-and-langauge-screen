import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import styles from '../codinglanguage/Language.module.css'
import Box from '@mui/material/Box';
import Profile from '../navbar/navbar'
export default function Language()
{
  return(
    <>
    <Profile/>
    <Box className={styles.box1}>
      <p className={styles.p}>Choose Your Coding Language</p>
      <Box className={styles.container}>
        <div className='d-flex'>
          <div className={styles.python}>
            <Image
            src="/python.png"
            height={50}
            width={50}
            />
            <p className={styles.p1}>Python</p>
          </div>
            <div className={styles.javascript}>
              <Image
              src="/javascript.png"
              height={50}
              width={50}
              />
              <p className={styles.p2}>Javascript</p>
            </div>
          <div className={styles.php}>
            <Image
            src="/php.png"
            height={50}
            width={50}
            />
            <p className={styles.p3}>php</p>
          </div>
            <div className={styles.sqllite}>
              <Image
              src="/sqllite.png"
              height={50}
              width={50}
              />
              <p className={styles.p4}>SQl Lite</p>
            </div>
          <div className={styles.java}>
            <Image
            src="/java.png"
            height={50}
            width={50}
            />
            <p className={styles.p5}>Java</p>
          </div>
            <div className={styles.scala}>
              <Image
              src="/scala.png"
              height={50}
              width={50}
              />
              <p className={styles.p6}>Scala</p>
            </div>
        </div>
                  <div className='d-flex'>
                    <div className={styles.ruby}>
                      <Image
                      src="/ruby.png"
                      height={50}
                      width={50}
                      />
                      <p className={styles.p7}>Ruby</p>
                    </div>
                      <div className={styles.c}>
                        <Image
                        src="/c.png"
                        height={50}
                        width={50}
                        />
                        <p className={styles.p8}>C</p>
                      </div>
                    <div className={styles.cc}>
                      <Image
                      src="/c++.png"
                      height={50}
                      width={50}
                      />
                      <p className={styles.p9}>C++</p>
                    </div>
                      <div className={styles.swift}>
                        <Image
                        src="/swift.png"
                        height={50}
                        width={50}
                        />
                        <p className={styles.p10}>Swift</p>
                      </div>
                    <div className={styles.go}>
                      <Image
                      src="/go.png"
                      height={50}
                      width={50}
                      />
                      <p className={styles.p11}>Go</p>
                    </div>
                      <div className={styles.r}>
                        <Image
                        src="/r.png"
                        height={50}
                        width={50}
                        />
                        <p className={styles.p12}>R</p>
                      </div>
                  </div>
      </Box>
    </Box>
    </>
  )}