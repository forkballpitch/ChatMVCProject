/*
 * Copyright (c) 2016 아시아나IDT
 * 
 * 이 프로그램은 저작권 보호법에 의해 보호됩니다.
 * 이 프로그램의 일부나 전부를 무단으로 복제하거나 배포하는 경우에는
 * 저작권의 침해가 되므로 주의하시기 바랍니다.
 */
package org.springframework.samples.async.chat;


public class Message implements Comparable<Message> {

	private final long time;
	private final int type;
	private int newCount;
	private String userName;

	public Message() {
		time = 0L;
		type = 1;
		newCount = 0;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Message(int type, int newCount, long time) {
		this.type = type;
		this.newCount = newCount;
		this.time = time;
	}

	public int getType() {
		return type;
	}

	public int getNewCount() {
		return newCount;
	}
	
	public long getTime() {
		return time;
	}
	
	public void setNewCount(int newCOunt) {
		this.newCount = newCOunt;
	}

	@Override
	public int compareTo(Message compareTime) {

		int retVal = (int) (time - compareTime.time);

		return retVal;
	}
}
