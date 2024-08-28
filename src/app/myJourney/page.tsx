'use client';

import { useState, useContext, useEffect } from 'react';
import { Button, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import MyPlaceCard from '@/components/MyPlaceCard';
import PaginationBar from '@/components/Pagination';
import { useFetchMyPlaces } from '@/hooks/useFetchMyPlaces';
import { useGetMyPlacesCount } from '@/hooks/useGetMyPlacesCount';
import { AuthContext } from '@/app/AuthContext';

const Page = () => {
  const { user } = useContext(AuthContext);
  const [uid, setUid] = useState<string | null>(null);
  const contentPerPage = 9;
  const router = useRouter();

  useEffect(() => {
    if (user?.uid) {
      setUid(user.uid);
    }
  }, [user]);

  const { places, error, currentPage, moveToNextPage, moveToPrevPage } =
    useFetchMyPlaces(contentPerPage, uid || '');
  const { totalContentCount } = useGetMyPlacesCount(uid);

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner color="default" />
      </div>
    );

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-600 text-xl font-bold">{error}</h1>
        <Button
          className="mt-3"
          color="danger"
          onClick={() => {
            router.push('/');
          }}
        >
          홈으로
        </Button>
      </div>
    );
  }

  return (
    <div className="w-8/12 mx-auto pl-3">
      <h1 className="text-xl font-semibold mt-10 text-start mb-5">
        내가 경험한 {places.length}개의 여정
      </h1>
      <div className="grid grid-cols-3 gap-10 mb-10">
        {places.map((place) => (
          <div key={place.id}>
            <MyPlaceCard {...place} />
          </div>
        ))}
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalContents={totalContentCount}
        contentsPerPage={contentPerPage}
        moveToNextPage={moveToNextPage}
        moveToPrevPage={moveToPrevPage}
      />
    </div>
  );
};

export default Page;
