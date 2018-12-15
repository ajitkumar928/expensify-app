import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set start date action object',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should sort by date action object',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
});

test('should sort by amount action object',()=>{
    expect(sortByAmount()).toEqual({ type:'SORT_BY_AMOUNT' });
});

test('should set text filter action object provided with text',()=>{
    const text='';
    const action=setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})

test('should set text filter action object for no text',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})
