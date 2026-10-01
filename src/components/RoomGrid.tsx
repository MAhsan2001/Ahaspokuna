import React from 'react';
import { getStoredRooms } from '../utils/storage';
import { RoomCard } from './RoomCard';

interface RoomGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

export const RoomGrid: React.FC<RoomGridProps> = ({ limit, featuredOnly }) => {
  let rooms = getStoredRooms();
  if (featuredOnly) {
    rooms = rooms.filter((r) => r.featured);
  }
  if (limit) {
    rooms = rooms.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};
