<div className="PreMain">
            <h2>予選リーグDコート</h2>
            <button className="updateButton" onClick={handleChangeCount}>更新</button>
            <div className="Table">
              <table border="1">
                <thead>
                  <tr className="TableTitle">
                    <th className="TableTitle__number">試合</th>
                    <th className="TableTitle__team">チームA</th>
                    <th className="TableTitle__point">試合結果</th>
                    <th className="TableTitle__team">チームB</th>
                    <th className="TableTitle__referee">審判/補助</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="TableContent">
                    <th className="TableContent__number">1</th>
                    <td className="TableContent__teamA">
                      <p>{F1[0] && F1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 + 5)}}>+5</button>
                          <div className="CountPoint">{countF1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF2}</div>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 + 5)}}>+5</button>
                          <div className="CountPoint">{countF3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF4}</div>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{F2[0] && F2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{F4[0] && F4[0].name}</div>
                      <div>{F3[0] && F3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{F3[0] && F3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 + 5)}}>+5</button>
                          <div className="CountPoint">{countF5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF6}</div>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 + 5)}}>+5</button>
                          <div className="CountPoint">{countF7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF8}</div>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{F4[0] && F4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{F1[0] && F1[0].name}</div>
                      <div>{F2[0] && F2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{F1[0] && F1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 + 5)}}>+5</button>
                          <div className="CountPoint">{countF9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF10}</div>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 + 5)}}>+5</button>
                          <div className="CountPoint">{countF11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF12}</div>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{F3[0] && F3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{F2[0] && F2[0].name}</div>
                      <div>{F4[0] && F4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{F2[0] && F2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF13(countF13 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF13(countF13 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF13(countF13 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF13(countF13 + 5)}}>+5</button>
                          <div className="CountPoint">{countF13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF14}</div>
                          <button className="CountFutton" onClick = {() => {setCountF14(countF14 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF14(countF14 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF14(countF14 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF14(countF14 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF15(countF15 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF15(countF15 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF15(countF15 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF15(countF15 + 5)}}>+5</button>
                          <div className="CountPoint">{countF15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF16}</div>
                          <button className="CountFutton" onClick = {() => {setCountF16(countF16 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF16(countF16 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF16(countF16 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF16(countF16 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{F4[0] && F4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{F3[0] && F3[0].name}</div>
                      <div>{F1[0] && F1[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>