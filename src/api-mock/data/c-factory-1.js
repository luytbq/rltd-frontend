import * as utils from './utils.js';

export class MockFactory1 {

  constructor() {
    this.schema = {
      map: {
        baseImg: '/public/assets/company-a/factory-1.4000x.jpeg',
        width: 1756,
        height: 980,
      },
      dataFeeds: [
        {
          fetchUrl: 'http://localhost:3000/api/schemas/factory-1/sensors/data',
          fetchInterval: 3000,
          dataMap: {
            pump11_freq: {
                type: 'text',
                suffix: 'Hz',
                position: {
                  x: 227,
                  y: 155
                }
            },
            pump11_current: {
                type: 'text',
                suffix: 'A',
                position: {
                  x: 227,
                  y: 175
                }
            },
            pump12_freq: {
                type: 'text',
                suffix: 'Hz',
                position: {
                  x: 227,
                  y: 235
                }
            },
            pump12_current: {
                type: 'text',
                suffix: 'A',
                position: {
                  x: 227,
                  y: 255
                }
            },
            pump13_freq: {
                type: 'text',
                suffix: 'Hz',
                position: {
                  x: 227,
                  y: 315
                }
            },
            pump13_current: {
                type: 'text',
                suffix: 'A',
                position: {
                  x: 227,
                  y: 335
                }
            },
            pump14_freq: {
                type: 'text',
                suffix: 'Hz',
                position: {
                  x: 227,
                  y: 395
                }
            },
            pump14_current: {
                type: 'text',
                suffix: 'A',
                position: {
                  x: 227,
                  y: 415
                }
            },
            settlingTank_consistency: {
                type: 'text',
                suffix: 'NTU',
                styles: ['no-border'],
                position: {
                  x: 347,
                  y: 135
                }
            },
            settlingTank_clo: {
                type: 'text',
                suffix: 'mg/l',
                styles: ['no-border'],
                position: {
                  x: 347,
                  y: 155
                }
            },
            settlingTank_ph: {
                type: 'text',
                suffix: 'pH',
                styles: ['no-border'],
                position: {
                  x: 347,
                  y: 175
                }
            },
            settlingTank_pipePressure: {
                type: 'text',
                suffix: 'bar',
                styles: ['no-border'],
                position: {
                  x: 347,
                  y: 300
                }
            },
            settlingTank_traffic: {
                type: 'text',
                suffix: 'm3/h',
                styles: ['no-border'],
                position: {
                  x: 347,
                  y: 320
                }
            },
            settlingTank_total: {
                type: 'text',
                suffix: 'm3',
                styles: ['no-border'],
                position: {
                  x: 327,
                  y: 340
                }
            },
            filterTank1_waterLevel: {
              type: 'text',
              suffix: ' m',
              styles: [],
              position: {
                x: 965,
                y: 145
              }
            },
            filterTank1_capacity: {
                type: 'text',
                suffix: '%',
                styles: [],
                position: {
                  x: 980,
                  y: 235
                }
            },
            filterTank2_waterLevel: {
              type: 'text',
              suffix: ' m',
              styles: [],
              position: {
                x: 965,
                y: 300
              }
            },
            filterTank2_capacity: {
                type: 'text',
                suffix: '%',
                styles: [],
                position: {
                  x: 980,
                  y: 390
                }
            },
            filterTank3_waterLevel: {
              type: 'text',
              suffix: ' m',
              styles: [],
              position: {
                x: 965,
                y: 605
              }
            },
            filterTank3_capacity: {
                type: 'text',
                suffix: '%',
                styles: [],
                position: {
                  x: 980,
                  y: 455
                }
            },
            filterTank4_waterLevel: {
              type: 'text',
              suffix: ' m',
              styles: [],
              position: {
                x: 965,
                y: 545
              }
            },
            filterTank4_capacity: {
                type: 'text',
                suffix: '%',
                styles: [],
                position: {
                  x: 980,
                  y: 695
                }
            },
          }
        },
        {
          fetchUrl: 'http://localhost:3000/api/schemas/factory-1/devices/all/state',
          fetchInterval: 1000,
          dataMap: {
            pump11: {
              type: 'switch',
              fetch: {
                url: 'http://localhost:3000/api/schemas/factory-1/devices/pump11/state'
              },
              styles: ['text-l', 'no-border'],
              control: {
                0: {
                  label: 'Off',
                  desc: 'turn on pump NT 11',
                  styles: ['bg-red'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump11/state/1'
                },
                1: {
                  label: 'On',
                  desc: 'turn off pump NT 11',
                  styles: ['bg-green'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump11/state/0'
                }
              },
              position: {
                x: 167,
                y: 170
              },

            },
            pump12: {
              type: 'switch',
              fetch: {
                url: 'http://localhost:3000/api/schemas/factory-1/devices/pump12/state'
              },
              styles: ['text-l', 'no-border'],
              control: {
                0: {
                  label: 'Off',
                  desc: 'turn on pump NT 12',
                  styles: ['bg-red'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump12/state/1'
                },
                1: {
                  label: 'On',
                  desc: 'turn off pump NT 12',
                  styles: ['bg-green'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump12/state/0'
                }
              },
              position: {
                x: 167,
                y: 250
              },

            },
            pump13: {
              type: 'switch',
              fetch: {
                url: 'http://localhost:3000/api/schemas/factory-1/devices/pump13/state'
              },
              styles: ['text-l', 'no-border'],
              control: {
                0: {
                  label: 'Off',
                  desc: 'turn on pump NT 13',
                  styles: ['bg-red'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump13/state/1'
                },
                1: {
                  label: 'On',
                  desc: 'turn off pump NT 13',
                  styles: ['bg-green'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump13/state/0'
                }
              },
              position: {
                x: 167,
                y: 330
              },

            },
            pump14: {
              type: 'switch',
              fetch: {
                url: 'http://localhost:3000/api/schemas/factory-1/devices/pump14/state'
              },
              styles: ['text-l', 'no-border'],
              control: {
                0: {
                  label: 'Off',
                  desc: 'turn on pump NT 14',
                  styles: ['bg-red'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump14/state/1'
                },
                1: {
                  label: 'On',
                  desc: 'turn off pump NT 14',
                  styles: ['bg-green'],
                  method: 'PATCH',
                  url: 'http://localhost:3000/api/schemas/factory-1/devices/pump14/state/0'
                }
              },
              position: {
                x: 167,
                y: 410
              },

            },
          }
        }
      ],
      styles: {
        'default': {
          'font-size': '12px',
          color: 'white',
          'padding-inline': '2px',
          'padding-block': '1px',
          border: '1px solid white',
          'background-color': 'blue'
        },
        'text-l': {'font-size': '14px'},
        'text-white': { color: 'white' },
        'px-4': { 'padding-inline': '4px' },
        'py-2': { 'padding-block': '2px' },
        'b-1': { 'border-width': '1px' },
        'b-white': { 'border-color': 'white' },
        'bg-primary': { background: 'blue' },
        'bg-red': { background: 'red' },
        'bg-green': { background: 'green' },
        'no-border': { 'border-width': '0px' },
        'red': { 'color': 'red' },
        'green': { 'color': 'green' }
      },
    };
    this.deviceState = {
      pump11: 1,
      pump12: 1,
      pump13: 1,
      pump14: 1,
    }

    this.sensorData = {
      filterTank1_waterLevel: 2.1,
      filterTank2_waterLevel: 2.3,
      filterTank3_waterLevel: 2.6,
      filterTank4_waterLevel: 3.1,
    }

    this.sensorData.pump11_current = 0.5;
    this.sensorData.pump12_current = 0.5;
    this.sensorData.pump13_current = 0.5;
    this.sensorData.pump14_current = 0.5;
    this.sensorData.pump11_freq = 2.5;
    this.sensorData.pump12_freq = 2.5;
    this.sensorData.pump13_freq = 2.5;
    this.sensorData.pump14_freq = 2.5;

    this.sensorData.settlingTank_consistency = 8;
    this.sensorData.settlingTank_clo = 0.8;
    this.sensorData.settlingTank_ph = 7.2;
    this.sensorData.settlingTank_pipePressure = 1.5;
    this.sensorData.settlingTank_traffic = 10;
    this.sensorData.settlingTank_total = 31231401;

    setInterval(() => this.#updateSensorData(), 3000);
  }

  getSensorDataPretty() {
    const dataPretty = structuredClone(this.sensorData);
    const keys = Object.keys(dataPretty);
    keys.forEach(key => {
      if (typeof dataPretty[key] == 'number') {
        let fractalDigits = 0;
        if (key.startsWith('filterTank') && key.endsWith('_waterLevel'))
          fractalDigits = 1;
        if (key.startsWith('filterTank') && key.endsWith('_capacity'))
          fractalDigits = 2;
        if (key.startsWith('pump') && (key.endsWith('_current') || key.endsWith('_freq')))
          fractalDigits = 1;
        if (key.startsWith('settlingTank'))
          fractalDigits = 1;
        dataPretty[key] = dataPretty[key].toFixed(fractalDigits);
      }
    })

    return dataPretty;
  }

  getDevicesState() {
    return this.deviceState;
  }

  controlDeviceState(stateKey, state) {
    if (stateKey == undefined || state == undefined) return;
    this.#switchPump(stateKey, state)
  }

  getDeviceState(stateKey) {
    return this.deviceState[stateKey];
  }

  #switchPump(stateKey, state) {
    this.deviceState[stateKey] = state;
    if (state == 0) {
      this.sensorData[stateKey + '_current'] = 0;
      this.sensorData[stateKey + '_freq'] = 0;
    } else {
      this.sensorData[stateKey + '_current'] = 0.5;
      this.sensorData[stateKey + '_freq'] = 2.5;
    }
  }

  #updateSensorData() {
    for (let i = 1; i <=4; i++) {
      let key = `filterTank${i}_waterLevel`;
      let key1 = `filterTank${i}_capacity`;
      this.sensorData[key] += utils.randomNumber(-0.05, 0.05);
      this.sensorData[key1] = this.sensorData[key] / 4 * 100;
    }

    let countWorkingPumps = 0;
    for (let i = 11; i <= 14; i++) {
      let key = `pump${i}`;
      let key1 = `pump${i}_current`;
      let key2 = `pump${i}_freq`;
      if (this.deviceState[key] == 1) {
        this.sensorData[key1] += utils.randomNumber(-0.05, 0.05);
        this.sensorData[key2] += utils.randomNumber(-0.1, 0.1);
        countWorkingPumps++;
      } else {
        this.sensorData[key1] = 0;
        this.sensorData[key2] = 0;
      }
    }

    this.sensorData.settlingTank_consistency += utils.randomNumber(-1,1);
    this.sensorData.settlingTank_clo += utils.randomNumber(-0.1, 0.1);
    this.sensorData.ettlingTank_ph += utils.randomNumber(-0.1, 0.1);
    this.sensorData.settlingTank_pipePressure += utils.randomNumber(-0.1, 0.1);
    this.sensorData.settlingTank_traffic += utils.randomNumber(1, -1);
    this.sensorData.settlingTank_total += countWorkingPumps * 0.84;
  }

}
